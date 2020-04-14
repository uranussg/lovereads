class Api::SearchesController < ApplicationController
    def show 
        
        @books = Book.with_attached_cover.where("title ~* ?", params[:id])
        
    end

    def index
    end
end
