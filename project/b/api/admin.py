from django.contrib import admin

# Register your models here.
from api.models import Section, Heading, Subheading

admin.site.register(Section)
admin.site.register(Heading)
admin.site.register(Subheading)