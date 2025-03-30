from django.urls import path
from .views import *

urlpatterns = [
    path('mortgage/',MortgageListCreateView.as_view()),
    path('mortgage/<int:pk>/',MortgageRetrieveUpdateDeleteView.as_view()),
    path('credit-rating/',CreditRatingView.as_view())
]