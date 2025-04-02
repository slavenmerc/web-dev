from django.urls import path, re_path
from api import views
urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:id>/vacancies/',views.company_vacancy),
    path('companies/<int:id>/', views.company_by_id),
    path('vacancies/',views.vacancies_list),
    path('vacancies/<int:id>/',views.vacancy_by_id),
    path('vacancies/top_ten/', views.top_ten)
]