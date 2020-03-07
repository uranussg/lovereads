class Api::TagsController < ApplicationController
    def index
        debugger
        if params[:filter]
            @tags = Tag.includes(taggings: [:user, :book]).where(filter)
            debugger
        else
            @tags = Tag.all
            debugger
        end
    end

    def show 
        @books = Tag.find_by(name: params[:id])[0].books
    end

    def create 
        
        # @bookshelf = Bookshelf.new({user_id:params[:user_id], book_id:params[:book_id], title:params[:title]})
        @tags = Tagging.new(tag_params)

        
        if @tag.save
            
            render partial: 'api/tags/tag', object: @tag
        else 
            render @tag.errors.full_messages
        end
    end


    def filter_params
        @tags = Tag.joins(taggings: :user).where(filter)
        params.require(:filter).to_h
    end

    def tag_params
        params.require(:tag).permit(:name)
    end
    
end
