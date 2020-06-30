class BreathsController < ApplicationController
    before_action :authenticate, only: [:index, :show]

    def create
        @breath = Breath.new(painting_id: params[:painting_id])
        if @breath.save
            render json: { status: :created }
        else
            render json: { message: @breath.errors.messages }
        end
    end

    def index
        @breaths = Breath.all
        render json: @breaths 
    end

    def show
        @breath = Breath.find(params[:id])
        render json: @breath
    end
end
