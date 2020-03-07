class Api::TaggingsController < ApplicationController
    def create 
        
        # @bookshelf = Bookshelf.new({user_id:params[:user_id], book_id:params[:book_id], title:params[:title]})
        @tagging = Tagging.new(tagging_params)
        @tagging.user_id = current_user.id
        @tagging.tag_id = params[:tag_id]
        if @tagging.save

            render partial: 'api/taggings/tagging', object: @tagging
        else 
            render @tagging.errors.full_messages
        end
    end


    def destroy
        @tagging =Tagging.find(params[:id])
        
        if @tagging.destroy
            render partial: 'api/taggings/tagging', object: @tagging
        else 
            render @tagging.errors.full_messages
        end
    end

    def tagging_params 
        params.require(:tagging).permit(:book_id)
    end
end
