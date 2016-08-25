import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  photo: DS.attr(),
  price: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  feedbacks: DS.hasMany ('feedback', {async: true})
});
