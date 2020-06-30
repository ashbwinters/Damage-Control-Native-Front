class TampersController < ApplicationController
    before_action :authenticate, only: [:create, :index, :show]

    def create
        @tamper = Tamper.new(
            painting_id: params[:painting_id],
            significant_tamper: params[:significant_tamper],
            used_program: params[:used_program]
        )
        if @tamper.save
            render json: { status: :created }
        else
            render json: { message: @tamper.errors.messages }
        end
    end

    def index
        @tampers = Tamper.all
        render json: @tampers 
    end

    def show
        @tamper = Tamper.find(params[:id])
        render json: @tamper
    end
end
