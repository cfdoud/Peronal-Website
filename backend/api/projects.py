from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    url = models.URLField()
    image = models.URLField()  # Assuming this is the URL to an image

    def __str__(self):
        return self.name
