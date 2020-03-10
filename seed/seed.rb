require 'csv'
books = CSV.read('lovebooks.csv')
writers = CSV.parse(File.read("writers.csv"), headers: true)


cols = books.shift

books_dataset =[]
writer_order = writers.by_col[0]
distinct_writer = writer_order.uniq

books.each_with_index do |book, no|
    str = "b#{no} = Book.create("
    cols.each_with_index do |col, idx|
        str += "#{col}:'#{book[idx]}', "
    end 
    writer_id = distinct_writer.index(writer_order[no])
    str += "description:'',"
    # str += "description: 'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page. As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and a still considerable, though not so extensive, investment of time to read. This sense of book has a restricted and an unrestricted sense. In the restricted sense, a book is a self-sufficient section or part of a longer composition, a usage that reflects the fact that, in antiquity, long works had to be written on several scrolls, and each scroll had to be identified by the book it contained. So, for instance, each part of Aristotle's Physics is called a book. In the unrestricted sense, a book is the compositional whole of which such sections, whether called books or chapters or parts, are parts.'"
    str += "writer_id: w#{writer_id}.id)"
    
    books_dataset.push(str)
end
writers_dataset =[]
distinct_writer.each_with_index do |name, idx| 
    writers_dataset.push("w#{idx} = Writer.create(name: '#{name}', born: 'Earth', description: '')")
end

users_dataset =[]
20.times do |no|
    users_dataset.push("u#{no} = User.create(username:'song#{no}', email:'song#{no}', password:111111)")
end

reviews_dataset =[]
20.times do |n|
    7.times do |n1|
    reviews_dataset.push("r#{n*7 +n1} = Review.create(user_id: u#{n}.id, book_id:b#{n1*10 + rand(10)}.id, rate: #{[1, 2, 3, 4, 5].sample})")
    end
end

tags =['Biography',
    'Business',
    'Fiction',
    'Graphic Novels',
    'Historical Fiction',
    'History',
'Mystery',
'Nonfiction',
'Poetry',
'Manga',
'Memoir',
'Music',
'Mystery',
'Nonfiction',
'Paranormal',
'Philosophy',
'Poetry',
'Psychology',
'Religion',
'Romance',
'Science',
'Science Fiction',
'Self Help',
'Suspense',
'Spirituality',
'Sports',
'Thriller',
'Travel',
'Young Adult'
]
tags_dataset =[]

tags.each_with_index do |tag,idx|
    tags_dataset.push("t#{idx} = Tag.create(name:'#{tag}')")
end

taggings_dataset =[]


20.times do |n|
    7.times do |n1|
        taggings_dataset.push("Tagging.create( user_id:u#{n}.id, book_id:b#{rand(74)}.id, tag_id:t#{rand(tags.length)}.id)")
    end
end


covers_dataset =[]
    74.times do |no|
        str =""
        str += "file#{no} = open('https://lovereads-dev.s3-us-west-1.amazonaws.com/covers/#{no}.jpg')\n"
        str += "b[#{no}].cover.attach(io:file#{no}, filename: '#{no}.jpg')"
        covers_dataset.push(str)
    end

# p writer_order[-1]
# p distinct_writer[-1]

# puts users_dataset 
# puts writers_dataset
# puts books_dataset
# puts reviews_dataset 
# puts tags_dataset
# puts taggings_dataset
puts covers_dataset