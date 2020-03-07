class Api::WritersController < ApplicationController
    def show
        @writer = Writer.find(params[:id])
        
    end

    def index
    end
end
