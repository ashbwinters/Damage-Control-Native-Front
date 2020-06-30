class BumpsController < ApplicationController
    before_action :authenticate, only: [:index, :show]

    def create
        @bump = Bump.new(painting_id: params[:painting_id])
        if @bump.save
            render json: {status: :created}
        else
            render json: { message: @bump.errors.messages }
        end    end

    def index
        @bumps = Bump.all
        render json: @bumps 
    end

    def show
        @bump = Bump.find(params[:id])
        render json: @bump
    end
end
