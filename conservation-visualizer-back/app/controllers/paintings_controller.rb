class PaintingsController < ApplicationController
    before_action :authenticate, only: [:create, :index, :show]

    def create
        @painting = Painting.new(
            accessionNumber: params[:accessionNumber]
        )
        if @painting.save
            render json: { status: :created }
        else
            render json: { message: @painting.errors.messages }
        end
    end

    def show
        @painting = Painting.find_or_create_by(accessionNumber: params[:id])
        render json: @painting, include: [:tampers, :breaths, :bumps, :flashes, :touches]
    end

    def index
        @paintings = Painting.all
        render json: @paintings
    end
end
