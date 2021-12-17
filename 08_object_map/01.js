/**
 *
 * almost same, but some case map is better
 *
 * 1. map can take any key(functions, objects, any primitives),
 *    whereas object takes strings and symbols
 * 2. map key has order, object key not.
 *    map can return keys in insertion order.
 * 3. map has size, object not. object need manual search for size.
 * 4. map is iterable, object is not. in object, keys gives iteration
 * 5. object prototype key may collide with default key in map
 * 6. map may better performance in frequent addition and deletion of key pairs
 *
 */
