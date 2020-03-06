class Api::WriterController < ApplicationController
    def show
        @writer = Writer.find(params[:id])
    end
end
