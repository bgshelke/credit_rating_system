from django.test import TestCase
from api.models import Mortgage

class MortgageModelTest(TestCase):

    def setUp(self):
        """Setup test data before each test"""
        self.mortgage = Mortgage.objects.create(
            credit_score=750,
            loan_amount=200000.00,
            property_value=250000.00,
            annual_income=75000.00,
            debt_amount=5000.00,
            loan_type='fixed',
            property_type='single_family'
        )

    def test_mortgage_creation(self):
        """Test if Mortgage object is created successfully"""
        self.assertEqual(self.mortgage.credit_score, 750)
        self.assertEqual(self.mortgage.loan_amount, 200000.00)
        self.assertEqual(self.mortgage.property_value, 250000.00)
        self.assertEqual(self.mortgage.annual_income, 75000.00)
        self.assertEqual(self.mortgage.debt_amount, 5000.00)
        self.assertEqual(self.mortgage.loan_type, 'fixed')
        self.assertEqual(self.mortgage.property_type, 'single_family')

    def test_str_representation(self):
        """Test string representation of Mortgage model"""
        self.assertEqual(str(self.mortgage), f"Mortgage {self.mortgage.id}")