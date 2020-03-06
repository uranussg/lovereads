class Api::BookshelvesController < ApplicationController

    def index
        
        @books_on_shelves = current_user.books_on_shelves
        
    end

    def show
        
        @books_on_shelf = current_user.books_on_shelf(params[:id])
        
    end


    def create 
        
        # @bookshelf = Bookshelf.new({user_id:params[:user_id], book_id:params[:book_id], title:params[:title]})
        @bookshelf = Bookshelf.new(bookshelf_params)

        
        if @bookshelf.save
            
            render partial: 'api/bookshelves/bookshelf', object: @bookshelf
        else 
            render @bookshelf.errors.full_messages
        end
    end

    def update    
           
         @bookshelf = Bookshelf.find(params[:id])
        
        if @bookshelf.update(bookshelf_params)
            
            render partial: 'api/bookshelves/bookshelf', object: @bookshelf
        else 
            render @bookshelf.errors.full_messages
        end

    end

    def bookshelf_params
        params.require(:bookshelf).permit(:user_id, :book_id, :title)
    end

end
