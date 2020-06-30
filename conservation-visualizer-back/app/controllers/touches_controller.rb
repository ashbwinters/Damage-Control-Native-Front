class TouchesController < ApplicationController
    before_action :authenticate, only: [:index, :show]

    def create
        @touch = Touch.new(painting_id: params[:painting_id])
        if @touch.save
            render json: {status: :created}
        else
            render json: { message: @touch.errors.messages }
        end    end

    def index
        @touches = Touch.all
        render json: @touches 
    end

    def show
        @touch = Touch.find(params[:id])
        render json: @touch
    end
end
