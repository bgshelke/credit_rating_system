def calculate_credit_rating(mortgages):
    total_risk_score = 0
    avg_credit_score = sum(m["credit_score"] for m in mortgages) / len(mortgages)

    for m in mortgages:
        risk_score = 0
        ltv = m["loan_amount"] / m["property_value"]
        dti = m["debt_amount"] / m["annual_income"]

        if ltv > 0.9:
            risk_score += 2
        elif ltv > 0.8:
            risk_score += 1

        if dti > 0.5:
            risk_score += 2
        elif dti > 0.4:
            risk_score += 1

        if m["credit_score"] >= 700:
            risk_score -= 1
        elif m["credit_score"] < 650:
            risk_score += 1

        if m["loan_type"] == "adjustable":
            risk_score += 1
        if m["property_type"] == "condo":
            risk_score += 1

        total_risk_score += risk_score

    if avg_credit_score >= 700:
        total_risk_score -= 1
    elif avg_credit_score < 650:
        total_risk_score += 1

    if total_risk_score <= 2:
        return "AAA"
    elif total_risk_score <= 5:
        return "BBB"
    else:
        return "C"
