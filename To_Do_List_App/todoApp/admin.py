from django.contrib import admin
from todoApp.models import Tasks
# Register your models here.

class TasksAdmin(admin.ModelAdmin):
    list_display = ['id', 'tname', 'status']
admin.site.register(Tasks, TasksAdmin)