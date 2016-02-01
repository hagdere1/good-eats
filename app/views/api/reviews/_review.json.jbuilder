json.extract!(
  review,
  :id, :user_id, :edible_id, :title, :body, :created_at
)
json.user review.user.name
json.user review.edible.name
