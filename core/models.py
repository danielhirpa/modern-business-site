from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)       # A short text field for the title
    content = models.TextField()                    # A larger text field for the body
    created_at = models.DateTimeField(auto_now_add=True) # Automatically records creation time

    def __str__(self):
        return self.title # This makes the title show up nicely in the admin pane
class Project(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    tech_stack = models.CharField(max_length=100) # e.g., "Python, Django, Tailwind"
    link = models.URLField(blank=True, null=True)  # Optional link to GitHub or live site
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
from django.db import models

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.email}"
from django.db import models

from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    image_url = models.URLField(max_length=500, blank=True, null=True, help_text="Direct link to image (e.g. Unsplash)")
    icon_name = models.CharField(max_length=50, blank=True, help_text="e.g., Wrench, Sparkles, Building")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title