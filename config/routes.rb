Rails.application.routes.draw do
  # root "articles#index"
  get 'table/tasks', to: 'table#tasks'
  get 'table/positions', to: 'table#positions'
end
