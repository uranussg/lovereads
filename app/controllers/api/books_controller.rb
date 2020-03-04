class Api::BooksController < ApplicationController
    def index
        # debugger
        @new_books = Book.new_books
        # @top_rated = Book.top_rated
    end

    def show
        # debugger
        @book = Book.find(params[:id])
    end
end
