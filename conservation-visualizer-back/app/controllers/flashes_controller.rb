class FlashesController < ApplicationController
    before_action :authenticate, only: [:index, :show]

    def create
        @flash = Flash.new(painting_id: params[:painting_id])
        if @flash.save
            render json: {status: :created}
        else
            render json: { message: @flash.errors.messages }
        end
    end

    def index
        @flashes = Flash.all
        render json: @flashes 
    end

    def show
        @flash = Flash.find(params[:id])
        render json: @flash
    end
end
