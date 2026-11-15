from django.contrib import admin
from .models import Project, Service, ContactMessage

admin.site.register(Project)
admin.site.register(Service)
admin.site.register(ContactMessage)