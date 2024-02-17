from django.db import models

# Create your models here.
class Tasks(models.Model):
    tname = models.CharField(max_length=64)
    status = models.CharField(max_length=64, default='not completed')