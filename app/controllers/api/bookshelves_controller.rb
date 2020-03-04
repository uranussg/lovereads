class Api::BookshelvesController < ApplicationController

    def index
        # debugger
        @books_on_shelves = current_user.books_on_shelves
        # debugger
    end

    def show
        # debugger
        @books_on_shelf = current_user.books_on_shelf(params[:id])
        # debugger
    end


    def create 
        # debugger
        # @bookshelf = Bookshelf.new({user_id:params[:user_id], book_id:params[:book_id], title:params[:title]})
        @bookshelf = Bookshelf.new(bookshelf_params)

        # debugger
        if @bookshelf.save
            # debugger
            render partial: 'api/bookshelves/bookshelf', object: @bookshelf
        else 
            render @bookshelf.errors.full_messages
        end
    end

    def update       
         @bookshelf = Bookshelf.find(params[:id])
        debugger
        if @bookshelf.update(bookshelf_params)
            debugger
            render partial: 'api/bookshelves/bookshelf', object: @bookshelf
        else 
            render @bookshelf.errors.full_messages
        end

    end

    def bookshelf_params
        params.require(:bookshelf).permit(:user_id, :book_id, :title)
    end

end
