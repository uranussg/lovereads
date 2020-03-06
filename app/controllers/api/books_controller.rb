class Api::BooksController < ApplicationController
    def index
        
        @new_books = Book.new_books
        # @top_rated = Book.top_rated
    end

    def show
      
        @book = Book.find(params[:id])

    end
end
