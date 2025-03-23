from db_connection import Database
from week2.day4.menu_item_class import Menu_Item 

class Menu_Managers:
    @classmethod
    def get_by_name(cls, name):
        try:
            conn = Database.get_connection()  
            cursor = conn.cursor()
            cursor.execute(
                """SELECT * FROM Menu_Items 
                WHERE item_name = %s""", (name,)
            )
            item = cursor.fetchone()
            cursor.close()
            if item:
                return Menu_Item(item[1], item[2])  
            else:
                return None
        except Exception as e:
            print(f"Error fetching item by name: {e}")
            return None

    @classmethod
    def all_items(cls):
        try:
            conn = Database.get_connection()  
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM Menu_Items")
            items = cursor.fetchall()
            cursor.close()
            return [Menu_Item(item[1], item[2]) for item in items]
        except Exception as e:
            print(f"Error fetching all items: {e}")
            return []    
        
item2 = print(Menu_Managers.get_by_name('Burger'))
items = print(Menu_Managers.all_items())