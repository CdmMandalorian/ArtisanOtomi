const express = require("express")
const router = express.Router()
const cors = require("cors")
const uploadPhoto = require("../middlewares/upload")
const { getItem, addItem, updateItem, deleteItem } = require("../controllers/itemsController")
const Item = require("../models/itemsModel")

router.get('/', cors(), getItem)

router.get("/items",
async (req, res) => {
	const items = await Item.find()
	res.send(items)
})

/* The post request must have a body elemnt with name images */
router.post('/', uploadPhoto.array('images'), addItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router