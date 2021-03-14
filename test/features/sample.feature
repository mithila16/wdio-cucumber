Feature: Search And Add Product to Cart

  @addtocart
    Scenario: Search And Add Product to Cart
    Given I am launching website
    When I search for product
    And I select the product
    Then I change the quantity and size and color
    Then I add it to cart