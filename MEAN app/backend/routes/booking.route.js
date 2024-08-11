const express = require('express');
const { model } = require('mongoose');
const app = express()
const Router = express.Router();
const Book = require('../model/bookscheme')
const mongoose = require ('mongoose')

//*********************Insertion to database************************************/

Router.post('/create', async (req, res, next)=>{

    try {
        const  Name = req.body.name;
        const  Subject = req.body.subject;

        const newBook = new Book({
            name: Name,
            subject : Subject
        });

         await newBook.save();
         console.log('document saved successfully')    
       
  } catch (error) {
        console.error('Error creating book:', error);
    }
});

//***************************************************************************/
//*****************************Reading the data ******************************/

Router.get('/read', async (req, res, next)=>{
    try {
      
        const booksFound = await Book.find({});
        console.log('Bokks found', booksFound)
        res.json(booksFound); // Send data as JSON response

       
    } catch (error) {
       
        console.error('Error fetching books:', error);
       
    }
});

//*******************************************************************************/
//*****************************DELETION OF DATA***********************************/

Router.post('/delete', async (req, res) => {
  const { id } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  try {
    const result = await Book.findByIdAndDelete(id);
    if (result) {
      console.log("Rec deleted");
      return res.status(200).json({ message: 'Rec deleted' });
    } else {
      return res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error('Error deleting book', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


//****************************************************************** **************/
//*********************************UPDATION OF DATA ********************************* */

Router.put('/update/:id', async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedData = req.body;

   
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).send({ error: 'Invalid book ID' });
    }

   
    const result = await Book.findByIdAndUpdate(
      bookId,
      updatedData,
      { new: true, runValidators: true } 
    );

    if (!result) {
      return res.status(404).send({ error: 'Book not found' });
    }

    res.status(200).send({ message: 'Book updated successfully', data: result });
  } catch (error) {
    res.status(500).send({ error: 'Error updating book', details: error.message });
  }
});

//********************************************************************* */

module.exports = Router;