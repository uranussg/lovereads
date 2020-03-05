# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bookshelf.destroy_all
Book.destroy_all
User.destroy_all

u1 = User.create(username: "song1", email:"song1", password:111111)
u2 = User.create(username: "song2", email:"song2", password:111111)


b1 = Book.create(title:"demobook", writer_id: 1, description:"incredible demo book", publish_at: "01/01/2020", language: "English", isbn: 123456789)
b2 = Book.create(title:"yourbook", writer_id: 2, description:"must be a good book", publish_at: "02/01/2020", language: "English", isbn: 123456689)
b3 = Book.create(title:"yourbook2", writer_id: 1, description:"must be a good book", publish_at: "02/01/2010", language: "English", isbn: 23456689)
b4 = Book.create(title:"yourbook3", writer_id: 3, description:"must be a good book", publish_at: "02/01/2015", language: "English", isbn: 1234566899)
b5 = Book.create(title:"yourbook4", writer_id: 4, description:"must be a good book", publish_at: "02/01/2016", language: "English", isbn: 12324233456689)


s1 =Bookshelf.create(user_id: u1.id, book_id:b1.id, title: "Read")
s2 =Bookshelf.create(user_id: u1.id, book_id:b2.id, title: "Reading")
s3 =Bookshelf.create(user_id: u1.id, book_id:b3.id, title: "Read")
s4 =Bookshelf.create(user_id: u1.id, book_id:b4.id, title: "Want to Read")

r1 = Review.create(user_id: u1.id, book_id:b1.id, rate: 4, body:"very good!")
r2 = Review.create(user_id: u1.id, book_id:b2.id, rate: 5, body:"good!")
r3 = Review.create(user_id: u1.id, book_id:b3.id, rate: 2)
r4 = Review.create(user_id: u1.id, book_id:b4.id, rate: 3)
r5 = Review.create(user_id: u2.id, book_id:b1.id, rate: 5)