from django.db import models

# Create your models here.
class Company(models.Model):
    def __str__(self):
        return f'{self.name}'
    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    city = models.CharField(max_length=255)
    address = models.TextField(max_length=1000)

class Vacancy(models.Model):
    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
    def __str__(self):
        return f'{self.name}'
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    salary = models.FloatField(default=1000)
    company = models.ForeignKey("Company",on_delete=models.CASCADE,default=0)