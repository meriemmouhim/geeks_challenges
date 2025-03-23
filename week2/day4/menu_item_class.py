# from menu_managers import Menu_Managers
from db_connection import Database
class Menu_Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    def save(self):
        try:
            conn = Database.get_connection()
            cursor = conn.cursor()
            cursor.execute(
                """INSERT INTO menu_Items (item_name, item_price) 
                    VALUES (%s, %s)""",
                (self.name, self.price)
            )   
            conn.commit()
            cursor.close()
            print(f"{self.name} added to menu successfully")
        except Exception as e:
            print(f"Error adding {self.name} to menu: {str(e)}")
    def delete(self):
        try:
            conn = Database.get_connection()
            cursor = conn.cursor()
            cursor.execute(
                """DELETE FROM menu_items WHERE item_name=%s""", (self.name,)
            )
            conn.commit()
            cursor.close()
            print(f"{self.name} removed from menu successfully")
        except Exception as e:
            print(f"Error removing {self.name} from menu: {str(e)}")
    def update(self, name, price):
        try:
            conn = Database.get_connection()
            cursor = conn.cursor()
            cursor.execute(
                """UPDATE menu_items SET item_name=%s, item_price=%s WHERE item_name=%s""",
                (name, price, self.name)
            )
            conn.commit()
            cursor.close()
            print(f"{self.name} price updated successfully")
        except Exception as e:
            print(f"Error updating price for {self.name}: {str(e)}")
item = Menu_Item('Burger', 35)
item.save()
item = Menu_Item('pizza', 20)
item.save()
item = Menu_Item('soda', 5)
item.save()
item.delete()
item.update('Veggie Burger', 37)