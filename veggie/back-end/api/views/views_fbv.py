from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Heading, Section, Subheading
from api.serializers import HeadingSerializer, SectionSerializer, SubheadingSerializer


@api_view(['GET', 'POST'])
def headings_list(request, section_id):
    try:
        section = Section.objects.get(id=section_id)
    except Section.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        headings = Heading.objects.filter(section=section)
        serializer = HeadingSerializer(headings, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = HeadingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def section_details(request, section_id):
    try:
        section = Section.objects.get(id=section_id)
    except Section.DoesNotExist as e:
        return Response({'error': str(e)})
    serializer = SectionSerializer(section)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def subheading_details(request, subheading_id):
    try:
        subheading = Subheading.objects.get(id=subheading_id)
    except Section.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = SubheadingSerializer(subheading)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SubheadingSerializer(instance=subheading, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        subheading.delete()
        return Response({'deleted': True})


@api_view(['GET'])
def subheadings_list(request):
    if request.method == 'GET':
        headings = Subheading.objects.all()
        serializer = SubheadingSerializer(headings, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def headings_count(request):
    if request.method == 'GET':
        headings = Heading.all_headings.all()
        serializer = HeadingSerializer(headings, many=True)
        return Response(serializer.data)
