from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Section, Heading, Subheading
from api.serializers import SectionSerializer, SubheadingSerializer, HeadingSerializer


class SectionsListAPIView(generics.ListCreateAPIView):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    permission_classes = (IsAuthenticated,)


class HeadingRelated:
    def get_object(self, heading_id):
        try:
            return Heading.objects.get(id=heading_id)
        except Heading.DoesNotExist as e:
            return Response({'error': str(e)})


class SubheadingsListAPIView(APIView, HeadingRelated):
    def get(self, request, heading_id):
        heading = self.get_object(heading_id)
        subheadings = Subheading.objects.filter(heading=heading)
        serializer = SubheadingSerializer(subheadings, many=True)
        return Response(serializer.data)

    def post(self, request, heading_id):
        serializer = SubheadingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class HeadingDetailsAPIView(APIView, HeadingRelated):
    def get(self, request, heading_id):
        heading = self.get_object(heading_id)
        serializer = HeadingSerializer(heading)
        return Response(serializer.data)

    def put(self, request, heading_id):
        heading = self.get_object(heading_id)
        serializer = HeadingSerializer(instance=heading, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, heading_id):
        heading = self.get_object(heading_id)
        heading.delete()
        return Response({'deleted': True})
