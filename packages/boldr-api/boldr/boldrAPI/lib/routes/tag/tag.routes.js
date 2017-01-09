'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _authentication = require('../../services/authentication');

var _core = require('../../core');

var _utils = require('../../utils');

var _tag = require('./tag.model');

var _tag2 = _interopRequireDefault(_tag);

var _tag3 = require('./tag.controller');

var ctrl = _interopRequireWildcard(_tag3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = new _core.BaseController(_tag2.default);

var router = new _express2.default.Router();
/**
 * @api {get} /tags Retrieve all tags
 * @apiName Index
 * @apiGroup Tag
 * @apiPermission public
 * @apiUse listParams
 * @apiSuccess (200) {Object[]} tags List of tags.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', _utils.processQuery, controller.index.bind(controller));
/**
 * @api {get} /tags/:id Get a specific tag by its id.
 * @apiName Show
 * @apiGroup Tag
 * @apiPermission public
 * @apiSuccess (200) {Object} tag The tag requested.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/:id', controller.show.bind(controller));
/**
 * @api {get} /tags/posts/:name Returns all posts associated with the tag.
 * @apiName getTaggedPostsByName
 * @apiGroup Tag
 * @apiPermission public
 * @apiParam {String} name The tag name
 * @apiSuccess (200) {Object[]} posts List of posts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/posts/:name', ctrl.getTaggedPostsByName);
/**
 * @api {get} /tags/:id/posts Returns all posts associated with the tag.
 * @apiName getTaggedPosts
 * @apiGroup Tag
 * @apiPermission public
 * @apiParam {Number} id The tag id
 * @apiSuccess (200) {Object[]} posts List of posts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/:id/posts', ctrl.getTaggedPosts);
/**
 * @api {post} /tags Create a new tag
 * @apiName create
 * @apiGroup Tag
 * @apiPermission admin
 * @apiHeader {String} Authorization {token}
 * @apiSuccess (201) {Object} tag The newly created tag
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError {Object} 409 There is already a tag with this name
 * @apiError {Object} 401 Unauthorized. You must be logged in to create a tag.
 */
router.post('/', _authentication.isAuthenticated, controller.create.bind(controller));
/**
 * @api {put} /tags/:id Update a tag
 * @apiName update
 * @apiGroup Tag
 * @apiPermission admin
 * @apiUse authHeader
 * @apiParam {Number} id The tag id
 * @apiSuccess (202) {Object} tag The updated tag.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError {Object} 401 Unauthorized. You must be logged in to create a tag.
 */
router.put('/:id', _authentication.isAuthenticated, controller.update.bind(controller));
/**
 * @api {patch} /tags/:id Update a tag
 * @apiName update
 * @apiGroup Tag
 * @apiPermission admin
 * @apiUse authHeader
 * @apiParam {Number} id The tag id
 * @apiSuccess (202) {Object} tag The updated tag.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError {Object} 401 Unauthorized. You must be logged in to create a tag.
 */
router.patch('/:id', _authentication.isAuthenticated, controller.update.bind(controller));

router.delete('/:id', _authentication.isAuthenticated, controller.destroy.bind(controller));

exports.default = router;