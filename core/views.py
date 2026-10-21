from django.shortcuts import render
from .models import Post, Project
from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from .models import Service
from .serializers import ServiceSerializer

class ServiceListCreateAPI(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ProjectListAPI(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer  # Import Project model

def home_view(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'core/index.html', context)

def about(request):
    return render(request, 'core/about.html')

# <-- ADD YOUR NEW PROJECTS VIEW HERE -->
def projects_view(request):
    all_projects = Project.objects.all()  # Query all projects from the database
    context = {
        'projects': all_projects
    }
    return render(request, 'core/projects.html', context)

class ContactMessageCreateAPI(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer