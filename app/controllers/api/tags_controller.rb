class Api::TagsController < ApplicationController
    def index
        
        if params[:filter]
            @tags = Tag.includes(taggings: [:user, :book]).where(filter)
            
        else
            @tags = Tag.all
            
        end
    end

    def show 
        
        @books = Tag.find_by(name: params[:id]).books
    end

    def create 

        @tag = Tag.find_by(name: tag_params[:name])
        if @tag 
            render partial: 'api/tags/tag', object: @tag
        else

            @tag = Tag.new(tag_params)

            
            if @tag.save
                
                render partial: 'api/tags/tag', object: @tag
            else 
                render @tag.errors.full_messages
            end
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
