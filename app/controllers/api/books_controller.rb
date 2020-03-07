class Api::BooksController < ApplicationController
    def index
        
        @new_books = Book.includes(:writer).new_books
        # @top_rated = Book.top_rated
    end

    def show
      
        @book = Book.includes(:writer, :reviews, :tags).find(params[:id])

    end
end
