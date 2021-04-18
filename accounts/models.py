from django.db import models
from django.contrib.auth.models import AbstractUser


class AppUser(AbstractUser):
    company = models.CharField(max_length=255)

    @property
    def full_name(self):
        name_list = [self.first_name, self.last_name]
        return " ".join([str(x) if x is not None else "" for x in name_list]).strip()

    def __str__(self):
        return self.email or self.username
