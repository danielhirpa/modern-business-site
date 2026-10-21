from django.urls import path
from .views import ProjectListAPI,ContactMessageCreateAPI,ServiceListCreateAPI

urlpatterns = [
    path('api/projects/', ProjectListAPI.as_view(), name='project-api'),
    path('api/contact/', ContactMessageCreateAPI.as_view(), name='contact-api'),
    path('api/services/', ServiceListCreateAPI.as_view(), name='service-list-create'),
]