from flask import Flask, request, jsonify
from menu_item_class import Menu_Item
from menu_managers_class import Menu_Managers
app = Flask(__name__)
@app.route('/menu', methods=['GET'])
def get_items():
    items = Menu_Managers.all_items()
    return jsonify({"items": [{"name": i.name, "price": i.price} for i in items]})
@app.route('/menu', methods=['POST'])
def add_item():
    data = request.json
    item = Menu_Item(data['name'], data['price'])
    item.save()
    return jsonify({"message": "Item added"}), 201
@app.route('/menu/<name>', methods=['DELETE'])
def remove_item(name):
    item = Menu_Item(name, 0)
    item.delete()
    return jsonify({"message": "Item deleted"}), 204
if __name__ == '__main__':
    app.run(debug=True)