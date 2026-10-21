from django.contrib import admin
from .models import Post,Project,ContactMessage,Service # Import your model

# Register your model here so it appears in the admin panel
admin.site.register(Post)
admin.site.register(Project)
admin.site.register(ContactMessage)
admin.site.register(Service)

# Register your models here.
