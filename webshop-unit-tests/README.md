# Test the unit shop

In deze technische webshop wordt gewerkt met een *Shopping Cart*. Aan jou de taak om deze te **testen** en waar nodig te **verbeteren**. 

Start de tests
```bash
npm test
```

De tests kun je vinden in de `tests` folder. 

## Opdracht

1. Verbeter de code van de `ShoppingCart` zodat alle tests van taak `1. Add item` slagen.
2. Schrijf de test voor requirement 2.2.
3. Verbeter de code van de `ShoppingCart` zodat alle tests van taak `2. Decrease quantity` slagen.
4. Schrijf de tests voor `3. Apply discount code`, requirements 3.1 t/m 3.5.
5. Verbeter de code van de `ShoppingCart` zodat alle tests van taak `3. Apply discount code` slagen.



## Taken en requirements

### 1. Add item
- 1.1. Wanneer het product nog niet bestaat in de ShoppingCart wordt de hoeveelheid 1.
- 1.2. Waneer het product al in de winkelmand staat, moet de hoeveelheid met 1 verhoogd worden.
- 1.3. Als er geen `Product` wordt meegegeven, dan moet er een error volgen.

### 2. Decrease quantity
- 2.1. Als de hoeveelheid 1 is, moet dit product verwijderd worden uit de winkelmand.
- 2.2. Als de hoeveelheid groter is dan 1, moet dit product niet verwijderd worden maar moet alleen de hoeveelheid verlaagd worden.
- 2.3. Als er geen product meegegeven wordt, moet er niks gebeuren.
- 2.4. Als er een product meegegeven wordt dat niet in de ShoppingCart zit, moet er een error getoond worden

### 3. Apply discount code
- 3.1. De functie moet een `DiscountResult` teruggeven.
- 3.2. Wanneer de code bestaat, zal het bericht `Kortingscode [code] toegepast ([hoeveelheid]% korting)!` en `success` is `true` moeten worden terugegeven.
- 3.3 Wanneer de code niet bestaat, zal het bericht `Ongeldige of verlopen kortingscode.`en `success` is `false` moeten worden terugegeven.
- 3.4. Op basis van de code moet de juiste korting over het totaalbedrag worden berekend.
- 3.5. De kortingscode moet correct verwijderd worden

