class Api::SearchesController < ApplicationController
    def show 
        
        @books = Book.where("title ~ ?", params[:id])
        
    end

    def index
    end
end