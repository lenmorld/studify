class CommentsController < ApplicationController
    def create
        @lesson = Lesson.find(params[:lesson_id])
        @coment = @lesson.comments.create(comment_params)
        redirect_to lesson_path(@lesson)
    end

    def destroy
        @lesson = Lesson.find(params[:lesson_id])
        @comment = @lesson.comments.find(params[:id])
        @comment.destroy
        redirect_to lesson_path(@lesson)
    end

    private
        def comment_params
            params.require(:comment).permit(:commenter, :body)
        end
end
