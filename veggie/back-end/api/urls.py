from django.urls import path
from api.views import views_cbv, views_fbv, views_auth
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('login/', obtain_jwt_token),
    path('sections/', views_cbv.SectionsListAPIView.as_view()),
    path('sections/<int:section_id>/headings/', views_fbv.headings_list),
    path('sections/<int:section_id>/', views_fbv.section_details),
    path('headings/<int:heading_id>/subheadings/', views_cbv.SubheadingsListAPIView.as_view()),
    path('headings/<int:heading_id>/edit/', views_cbv.HeadingDetailsAPIView.as_view()),
    path('subheadings/<int:subheading_id>/edit/', views_fbv.subheading_details),
    path('signup/', views_auth.sign_up),
    path('users/<str:username>/', views_auth.get_user),
    path('subheadings/', views_fbv.subheadings_list),
    path('manager/', views_fbv.headings_count)
]