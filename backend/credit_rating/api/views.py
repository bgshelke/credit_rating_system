from rest_framework import generics,status
from rest_framework.response import Response
from .models import Mortgage
from .serializers import MortgageSerializer
from .credit_rating import calculate_credit_rating

class MortgageListCreateView(generics.ListCreateAPIView):
    queryset = Mortgage.objects.all()
    serializer_class = MortgageSerializer

    def post(self, request, *args, **kwargs):
        response = self.create(request, *args, **kwargs)
        mortgages = Mortgage.objects.all()
        rating = calculate_credit_rating(mortgages)
        return Response({"message": "Mortgage saved successfully", "credit_rating": rating})

class MortgageRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mortgage.objects.all()
    serializer_class = MortgageSerializer
    

class CreditRatingView(generics.GenericAPIView):
    def get(self, request):
        mortgages = Mortgage.objects.all().values()
        if not mortgages:
            return Response({"error": "No mortgage data found"}, status=status.HTTP_400_BAD_REQUEST)
        print(list(mortgages))
        rating = calculate_credit_rating(list(mortgages))
        print('credit Rating--->',rating)
        return Response({"credit_rating": rating},status=status.HTTP_200_OK)
