from django.db import models

# Create your models here.

class Galaxy(models.Model):
        id = models.AutoField(primary_key=True)
        title = models.CharField(max_length=32)
        desc = models.CharField(max_length=256)
        year = models.IntegerField()
