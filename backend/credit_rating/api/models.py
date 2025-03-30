from django.db import models

loan = [('fixed', 'Fixed'), ('adjustable', 'Adjustable')]
properties = [('single_family', 'Single Family'), ('condo', 'Condo')]


class Mortgage(models.Model):
    
    credit_score = models.IntegerField()
    loan_amount = models.FloatField()
    property_value = models.FloatField()
    annual_income = models.FloatField()
    debt_amount = models.FloatField()
    loan_type = models.CharField(max_length=10, choices=loan)
    property_type = models.CharField(max_length=20, choices=properties)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Mortgage {self.id}"